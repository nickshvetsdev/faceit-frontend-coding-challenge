import { TournamentActionType } from '../action-types';
import { TournamentType } from '../../types';

// Create data action creators
export const createDataRequest = () => ({
  type: TournamentActionType.CREATE_DATA_REQUEST,
});

export const createDataSuccess = (data: TournamentType) => ({
  type: TournamentActionType.CREATE_DATA_SUCCESS,
  payload: data,
});

export const createDataFailure = (error: string) => ({
  type: TournamentActionType.CREATE_DATA_FAILURE,
  payload: error,
});

// Read data action creators
export const getDataRequest = () => ({
  type: TournamentActionType.GET_DATA_REQUEST,
});

export const getDataSuccess = (data: TournamentType) => ({
  type: TournamentActionType.GET_DATA_SUCCESS,
  payload: data,
});

export const getDataFailure = (error: string) => ({
  type: TournamentActionType.GET_DATA_FAILURE,
  payload: error,
});

// Update data action creators
export const updateDataRequest = () => ({
  type: TournamentActionType.UPDATE_DATA_REQUEST,
});

export const updateDataSuccess = (data: TournamentType) => ({
  type: TournamentActionType.UPDATE_DATA_SUCCESS,
  payload: data,
});

export const updateDataFailure = (error: string) => ({
  type: TournamentActionType.UPDATE_DATA_FAILURE,
  payload: error,
});

// Delete data action creators
export const deleteDataRequest = () => ({
  type: TournamentActionType.DELETE_DATA_REQUEST,
});

export const deleteDataSuccess = (id: string) => ({
  type: TournamentActionType.DELETE_DATA_SUCCESS,
  payload: id,
});

export const deleteDataFailure = (error: string) => ({
  type: TournamentActionType.DELETE_DATA_FAILURE,
  payload: error,
});
