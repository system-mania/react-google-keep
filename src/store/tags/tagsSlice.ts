import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';

const initialState = {
  tagsList: [
    { tag: 'coding', id: v4() },
    { tag: 'exercise', id: v4() },
    { tag: 'quotes', id: v4() },
  ],
};

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addTags: (state, { payload }) => {
      if (state.tagsList.find((tag) => tag.tag === payload.tag)) {
        toast.warning('이미 존재하는 태그입니다.');
      }
      state.tagsList.push(payload);
      toast.info('새로운 태그가 추가되었습니다.');
    },
    deleteTags: (state, { payload }) => {
      state.tagsList = state.tagsList.filter((tag) => tag.id !== payload.id);
      toast.info('태그가 삭제되었습니다.');
    },
  },
});

export const { addTags, deleteTags } = tagsSlice.actions;
export default tagsSlice.reducer;
