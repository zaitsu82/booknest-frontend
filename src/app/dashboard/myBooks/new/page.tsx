"use client";

import { useState } from 'react';
import { TextField, Button, Container, Typography, Stack } from '@mui/material';

export default function NewBookPage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, author, description });
    // TODO: API連携して登録処理を実装
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        本の登録
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="タイトル"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="著者"
            variant="outlined"
            fullWidth
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <TextField
            label="説明"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            登録
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
