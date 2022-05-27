import React, { memo, useState, useEffect } from 'react';
import {
    MainContainer,
    Card,
    CardContainer,
    UserCardsContainer,
    UserCard,
    UserFullName,
    UserEmail,
    ButtonsContainer,
    SkeletonContainer,
} from './styles';
import axios from '../../config/https';
import { enviroment } from '../../config/EnviromentConfig';
import { get } from 'lodash';
import { Divider } from '../../utils/styled-components';
import { Button } from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import ListSkeleton from "../../components/ListSkeleton";

function Users() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        setIsLoading(true);
        axios.get(enviroment.API_ENDPOINT_URL + `api/users?page=${page}`)
            .then(response => {
                const responseUsers = get(response, 'data.data', []);
                const allUsers = users.concat(responseUsers);

                setUsers(allUsers);
                setPage(page + 1);
            }).catch(() => {
                navigate('/ups')
            }).finally(() => {
                setIsLoading(false)
        });
    };

    const handleLogOut = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <MainContainer>
            <Card>
                {isLoading ? (
                    <SkeletonContainer>
                        <ListSkeleton />
                    </SkeletonContainer>
                ) : (
                    <CardContainer>
                        <UserCardsContainer>
                            {users && users.map(_user => (
                                <UserCard
                                    key={`${get(_user, 'avatar', '')}${get(_user, 'first_name', '')} `}
                                >
                                    <img
                                        src={get(_user, 'avatar', '')}
                                        alt="get(_user, 'email', '')"
                                        className="avatar-img"
                                    />
                                    <UserFullName>
                                        {get(_user, 'first_name', '')} {get(_user, 'last_name', '')}
                                    </UserFullName>
                                    <Divider size={4} />
                                    <UserEmail>
                                        {get(_user, 'email', '')}
                                    </UserEmail>
                                </UserCard>
                            ))}
                        </UserCardsContainer>
                        <ButtonsContainer>
                            <Button
                                variant="contained"
                                disabled={page > 2}
                                onClick={()  => fetchUsers()}
                            >
                                Cargar más
                            </Button>
                            <Button
                                variant="text"
                                className="sign-out-button"
                                onClick={()  => handleLogOut()}
                            >
                                Cerrar sesión
                            </Button>
                        </ButtonsContainer>
                    </CardContainer>
                )}
            </Card>
        </MainContainer>
    );
}

export default memo(Users);
