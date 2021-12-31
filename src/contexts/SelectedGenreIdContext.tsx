import { createContext, ReactNode, useState, useEffect, Dispatch, SetStateAction } from 'react';

interface SelectedGenreIdContext {
    selectedGenreId: number;
    setSelectedGenreId: Dispatch<SetStateAction<number>>;
}

interface SelectedGenreIdContextProviderProps {
    children: ReactNode;
}

export const SelectedGenreIdContext = createContext({} as SelectedGenreIdContext);

export function SelectedGenreIdContextProvider({children}: SelectedGenreIdContextProviderProps) {
    const [selectedGenreId, setSelectedGenreId] = useState(1);

    useEffect(() => {
        if(!selectedGenreId) {
            throw new Error('Missing information for genre');
        }

        setSelectedGenreId(selectedGenreId);
    }, []);

    return (
        <SelectedGenreIdContext.Provider value={{selectedGenreId, setSelectedGenreId}} >
            {children}
        </SelectedGenreIdContext.Provider>
    );
}