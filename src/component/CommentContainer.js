import { Box, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

function CommentForm({ boardId }) {
  const [comment, setComment] = useState("");

  function handleSubmit() {
    axios.post("/api/comment/add", {
      boardId,
      comment,
    });
  }

  return (
    <Box>
      <Textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <Button onClick={handleSubmit}>쓰기</Button>
    </Box>
  );
}

function CommentList() {
  return <Box>댓글 리스트</Box>;
}

export function CommentContainer({ boardId }) {
  return (
    <Box>
      <CommentForm boardId={boardId} />
      <CommentList />
    </Box>
  );
}
