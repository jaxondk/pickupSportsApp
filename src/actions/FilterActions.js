import { RESTORE_SAVED_FILTER, SAVE_TMP_FILTER } from "../constants";

export const toggle = (type) => ({ type: type });

export const restoreSavedFilter = () => ({type: RESTORE_SAVED_FILTER});

export const saveTmpFilter = () => ({type: SAVE_TMP_FILTER})