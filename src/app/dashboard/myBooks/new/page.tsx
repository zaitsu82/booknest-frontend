'use client';

import { useState } from 'react';
import { TextField, Button, Container, Typography, Stack, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

export default function NewBookPage() {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    publisher: '',
    publishDate: '',
    isbn: '',
    review: '',
    genre: '',
  });

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Book Data:', bookData);
    // TODO: ここでAPIリクエストを実装
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        本の登録
      </Typography>
      <Stack spacing={2} component="form" onSubmit={handleSubmit}>
        <TextField label="書籍名" name="title" value={bookData.title} onChange={handleChange} required fullWidth />
        <TextField label="著者" name="author" value={bookData.author} onChange={handleChange} required fullWidth />
        <TextField label="出版社" name="publisher" value={bookData.publisher} onChange={handleChange} fullWidth />
        <TextField label="出版日" name="publishDate" type="date" value={bookData.publishDate} onChange={handleChange} InputLabelProps={{ shrink: true }} fullWidth />
        <TextField label="ISBN" name="isbn" value={bookData.isbn} onChange={handleChange} fullWidth />
        <TextField label="口コミ・レビュー" name="review" value={bookData.review} onChange={handleChange} multiline rows={4} fullWidth />
        <FormControl fullWidth>
          <InputLabel>ジャンル</InputLabel>
          <Select name="genre" value={bookData.genre} onChange={handleChange}>
            <MenuItem value="fiction">フィクション</MenuItem>
            <MenuItem value="nonfiction">ノンフィクション</MenuItem>
            <MenuItem value="fantasy">ファンタジー</MenuItem>
            <MenuItem value="mystery">ミステリー</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          登録
        </Button>
      </Stack>
    </Container>
  );
}
