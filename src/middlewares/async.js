export default function({dispatch}) {
  return function(next) {
    return function(action) {
      // if it doesnot have a promsie
      // send to next middleware if we have
      // otherwise it sends to reducers
      if (!action.payload || !action.payload.then) {
        return next(action)
      }

      // if we have a promsie
      // make sure the promsie resolves
      action.payload.then(function(response) {
        const newAction = {...action, payload: response};
        dispatch(newAction);
      });
    };
  }
}
