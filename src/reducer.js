export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    // token: 'BQDREPJp5mB82fWPT-njsnPKziWqd69lGPLFC3FmXhRHnC7mByu6yjPpFEpp_05N2aIy1Ubce1OLZ9atoRwdOrpOu352aco_GbixpNOTyZHTHxBrdUQFcuB1dyOBw7ATBjWgGvObCjqgZWTaC7U-4jEBmCbCqaEHdrUzXiiFU36pn1VUjaorqF0yk6ksLmw_jr8tG7Mzc1enTmprlURQ',
};

const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
            
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        default:
            return state;
    }
}
export default reducer;