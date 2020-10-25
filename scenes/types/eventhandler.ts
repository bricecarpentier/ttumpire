import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

export type EventHandler = (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
