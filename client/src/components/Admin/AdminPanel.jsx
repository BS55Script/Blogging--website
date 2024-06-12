// components/Admin/AdminPanel.jsx
import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { API } from '../../service/api';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await API.getAllUsers();
            if (response.isSuccess) {
                setUsers(response.data);
            }
        };
        const fetchPosts = async () => {
            const response = await API.getAllPosts();
            if (response.isSuccess) {
                setPosts(response.data);
            }
        };
        const fetchComments = async () => {
            const response = await API.getAllComments();
            if (response.isSuccess) {
                setComments(response.data);
            }
        };

        fetchUsers();
        fetchPosts();
        fetchComments();
    }, []);

    const deleteUser = async (id) => {
        await API.deleteUser(id);
        setUsers(users.filter(user => user._id !== id));
    };

    const deletePost = async (id) => {
        await API.deletePost(id);
        setPosts(posts.filter(post => post._id !== id));
    };

    const deleteComment = async (id) => {
        await API.deleteComment(id);
        setComments(comments.filter(comment => comment._id !== id));
    };

    return (
        <Box>
            <Typography variant="h4">Admin Panel</Typography>
            
            <Typography variant="h6">Users</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>
                                <Button onClick={() => deleteUser(user._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            
            <Typography variant="h6">Posts</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map(post => (
                        <TableRow key={post._id}>
                            <TableCell>{post._id}</TableCell>
                            <TableCell>{post.title}</TableCell>
                            <TableCell>
                                <Button onClick={() => deletePost(post._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            
            <Typography variant="h6">Comments</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Text</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {comments.map(comment => (
                        <TableRow key={comment._id}>
                            <TableCell>{comment._id}</TableCell>
                            <TableCell>{comment.text}</TableCell>
                            <TableCell>
                                <Button onClick={() => deleteComment(comment._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export default AdminPanel;
