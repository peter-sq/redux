//Action Creators

export const SelectSongs = song => {
    return {
        type: 'SONG_SELECTED', 
        payload: song
    };
};
