import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { traditionalPaintingsReducer,
         sculpturesReducer,
         digitalArtReducer,
         otherArtReducer
} from './PortfolioSlice';

export const Store = configureStore({
    reducer: {
        traditionalPaintings: traditionalPaintingsReducer,
        sculptures: sculpturesReducer,
        digitalArt: digitalArtReducer,
        otherArt: otherArtReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});