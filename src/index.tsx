import React, { useState, useEffect } from 'react';

import { createRoot } from 'react-dom/client';
import { useSelector, useDispatch, Provider } from 'react-redux';
import {
  getData,
  updateData,
  deleteData,
  createData,
  searchData,
} from './actions/actions';
import { RootState } from './reducers';
import { TournamentType } from './types';
import Tournament from './Tournament';
import {
  TournamentListContainer,
  TournamentListControls,
  LoadingStatus,
  LoadingError,
  Input,
  Button,
  H4,
  Container,
} from './components';

import { store } from './store/store';
import GlobalStyle from './GlobalStyle';

const App = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.tournaments
  );
  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(getData());
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(searchData(searchTerm));
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [dispatch, searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onEdit = (tournament: TournamentType) => {
    const { id, name } = tournament;
    const input = window.prompt('Tournament name:', name);
    if (input !== null) {
      dispatch(updateData(id, { ...tournament, name: input }));
    }
  };

  const onDelete = (id: string) => {
    const result = window.confirm(
      'Do you really want to delete this tournament?'
    );
    if (result) {
      dispatch(deleteData(id));
    }
  };

  const onCreate = () => {
    const name = window.prompt('Tournament name:');
    if (name !== null) {
      dispatch(createData(name));
    }
  };

  const onDateFormat = (ISODate: Date) => {
    let formattedDate = 'N/A';
    if (ISODate) {
      formattedDate = new Date(ISODate).toLocaleString('en-GB', {
        timeZone: 'UTC',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    }
    return formattedDate;
  };

  const loadFunction = () => {
    if (loading) {
      return <LoadingStatus>Loading tournaments ...</LoadingStatus>;
    } else if (Array.isArray(data) && data.length === 0) {
      return <LoadingStatus>No tournaments found.</LoadingStatus>;
    } else if (Array.isArray(data) && data.length > 1) {
      return (
        <TournamentListContainer>
          {data.map((tournament: TournamentType) => (
            <Tournament
              key={tournament.id}
              tournament={tournament}
              onEdit={onEdit}
              onDelete={onDelete}
              onDateFormat={onDateFormat}
            />
          ))}
        </TournamentListContainer>
      );
    } else if (error) {
      return (
        <LoadingError>
          <LoadingStatus>Something went wrong.</LoadingStatus>
          {/* @ts-ignore */}
          <Button onClick={() => dispatch(getData())}>Retry</Button>
        </LoadingError>
      );
    }
  };

  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <TournamentListControls>
        <Input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search tournament ..."
        />
        <Button onClick={() => onCreate()}>Create Tournament</Button>
      </TournamentListControls>
      {loadFunction()}
    </Container>
  );
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('No container found');
}
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
