import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';


// This is a custom hook that is going to be used in the components to get access to the state. this type definition is going to be used in the components to get access to the state. the reason we are doing this is because we want to make sure that the state object that is returned by the useSelector hook is of the type RootState. This is going to help us to avoid any type errors that might occur when we are trying to access the state object in the components.
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;