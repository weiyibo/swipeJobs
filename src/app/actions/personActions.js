import personHelper from '../helpers/personHelper';

export  const changeEditingPerson = (person) => {
    return {type: personHelper.ACTIONS.CHANGE_EDITING_PERSON, payload: person };
}