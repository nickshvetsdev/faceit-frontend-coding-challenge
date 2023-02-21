import { TournamentActionType } from '../actions/action-types';
import { TournamentType } from '../types';

interface State {
  data: TournamentType[];
  loading: boolean;
  error: string;
}

const initialState: State = {
  data: [],
  loading: false,
  error: '',
};

const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case TournamentActionType.GET_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TournamentActionType.CREATE_DATA_REQUEST:
    case TournamentActionType.UPDATE_DATA_REQUEST:
    case TournamentActionType.SEARCH_DATA_REQUEST:
    case TournamentActionType.DELETE_DATA_REQUEST:
      return {
        ...state,
      };
    case TournamentActionType.CREATE_DATA_SUCCESS:
      return {
        ...state,
        data: [action.payload, ...state.data],
        error: '',
      };
    case TournamentActionType.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: '',
      };
    case TournamentActionType.UPDATE_DATA_SUCCESS:
      return {
        ...state,
        data: state.data.map((tournament) => {
          if (tournament.id === action.payload.id) {
            return action.payload;
          } else {
            return tournament;
          }
        }),
        error: '',
      };
    case TournamentActionType.SEARCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: '',
      };

    case TournamentActionType.DELETE_DATA_SUCCESS:
      return {
        ...state,
        data: state.data.filter(
          (tournament) => tournament.id !== action.payload
        ),
        error: '',
      };
    case TournamentActionType.CREATE_DATA_FAILURE:
    case TournamentActionType.GET_DATA_FAILURE:
    case TournamentActionType.UPDATE_DATA_FAILURE:
    case TournamentActionType.SEARCH_DATA_FAILURE:
    case TournamentActionType.DELETE_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
