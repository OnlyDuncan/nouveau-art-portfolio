import { createSlice } from '@reduxjs/toolkit';
import { TraditionalPaintings, Sculptures, DigitalArt, OtherArt } from './Artwork';

const initialState = {
    traditionalPaintingsArray: TraditionalPaintings,
    sculpturesArray: Sculptures,
    digitalArtArray: DigitalArt,
    otherArtArray: OtherArt
};

const traditionalPaintingsSlice = createSlice({
    name: 'traditionalPaintings',
    initialState
});

const sculpturesSlice = createSlice({
    name: 'sculptures',
    initialState
});

const digitalArtSlice = createSlice({
    name: 'digitalArt',
    initialState
});

const otherArtSlice = createSlice({
    name: 'otherArt',
    initialState
});

export const traditionalPaintingsReducer = traditionalPaintingsSlice.reducer;

export const sculpturesReducer = sculpturesSlice.reducer;

export const digitalArtReducer = digitalArtSlice.reducer;

export const otherArtReducer = otherArtSlice.reducer;

export const selectAllTraditionalPaintings = (state) => {
    return state.traditionalPaintings.traditionalPaintingsArray;
};

export const selectAllSculptures = (state) => {
    return state.sculptures.sculpturesArray;
};

export const selectAllDigitalArt = (state) => {
    return state.digitalArt.digitalArtArray;
}

export const selectAllOtherArt = (state) => {
    return state.otherArt.otherArtArray;
}

export const selectTraditionalPaintingsById = (id) => (state) => {
    return state.traditionalPaintings.traditionalPaintingsArray.find(
        (traditionalPainting) => traditionalPainting.id === parseInt(id)
    );
};

export const selectSculpturesById = (id) => {
    return state.scuptures.sculpturesArray.find(
        (sculpture) => sculpture.id === parseInt(id)
    );
};

export const selectDigitalArtById = (id) => {
    return state.digitalArt.digitalArtArray.find(
        (digitalArt) => digitalArt.id === parseInt(id)
    );
};

export const selectOtherArtById = (id) => {
    return state.otherArt.otherArtArray.find(
        (otherArt) => otherArt.id === parseInt(id)
    );
};