
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const REQUEST_PROJECTS_SUCCESS = 'REQUEST_PROJECTS_SUCCESS';
export const REQUEST_PROJECTS_FAILED = 'REQUEST_PROJECTS_FAILED';

export const requestProjects = () => {
  return ({
    type: REQUEST_PROJECTS,
    key: 'visibleProjects',
  });
};

export const requestProjectsSucceeded = (response) => {
  return ({
    type: REQUEST_PROJECTS_SUCCESS,
    response,
    key: 'visibleProjects',
  });
};

export const requestProjectsFailed = (error) => {
  return ({
    type: REQUEST_PROJECTS_FAILED,
    error,
    key: 'visibleProjects',
  });
};