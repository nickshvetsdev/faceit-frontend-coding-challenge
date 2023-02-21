import { TournamentActionType } from '../action-types';
import { TournamentType } from '../../types';
import { Dispatch } from 'redux';
import { api } from '../../api';

// Create data action
export const createData = (name: string): any => {
  return (dispatch: Dispatch) => {
    dispatch({ type: TournamentActionType.CREATE_DATA_REQUEST });
    api
      .post('/tournaments', { name })
      .then((response: any) => {
        dispatch({
          type: TournamentActionType.CREATE_DATA_SUCCESS,
          payload: response,
        });
      })
      .catch((error: Error) => {
        dispatch({
          type: TournamentActionType.CREATE_DATA_FAILURE,
          payload: error.message,
        });
      });
  };
};

// Read data action
export const getData = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: TournamentActionType.GET_DATA_REQUEST });
    api
      .get('/tournaments?_sort=startDate&_order=desc')
      .then((response: TournamentType[]) => {
        dispatch({
          type: TournamentActionType.GET_DATA_SUCCESS,
          payload: response,
        });
      })
      .catch((error: Error) => {
        dispatch({
          type: TournamentActionType.GET_DATA_FAILURE,
          payload: error.message,
        });
      });
  };
};

// Update data action
export const updateData = (id: string, data: TournamentType): any => {
  return (dispatch: Dispatch) => {
    dispatch({ type: TournamentActionType.UPDATE_DATA_REQUEST });
    api
      .put(`/tournaments/${id}`, data)
      .then(() => {
        dispatch({
          type: TournamentActionType.UPDATE_DATA_SUCCESS,
          payload: data,
        });
      })
      .catch((error: Error) => {
        dispatch({
          type: TournamentActionType.UPDATE_DATA_FAILURE,
          payload: error.message,
        });
      });
  };
};

// Search data action
export const searchData = (query: string): any => {
  return (dispatch: Dispatch) => {
    // if (query !== '') {
    dispatch({ type: TournamentActionType.SEARCH_DATA_REQUEST });
    api
      .get(`/tournaments?q=${query}`)
      .then((response: TournamentType[]) => {
        dispatch({
          type: TournamentActionType.SEARCH_DATA_SUCCESS,
          payload: response,
        });
      })
      .catch((error: Error) => {
        dispatch({
          type: TournamentActionType.SEARCH_DATA_FAILURE,
          payload: error.message,
        });
      });
  };
};

// Delete data action
export const deleteData = (id: string): any => {
  return (dispatch: Dispatch) => {
    dispatch({ type: TournamentActionType.DELETE_DATA_REQUEST });
    api
      .delete(`/tournaments/${id}`)
      .then(() => {
        dispatch({
          type: TournamentActionType.DELETE_DATA_SUCCESS,
          payload: id,
        });
      })
      .catch((error: Error) => {
        dispatch({
          type: TournamentActionType.DELETE_DATA_FAILURE,
          payload: error.message,
        });
      });
  };
};
