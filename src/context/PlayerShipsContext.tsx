import React, { useState, createContext, useEffect } from 'react';
import fetchData from '../actions/FetchData';
import { getShipsURL } from '../api/api';
import { CellInterface } from '../components/Cell';

export type ShipType = {
    name: string;
    width: number;
    height: number;
    isSunk: boolean;
    shipSections: Array<CellInterface>;
};

export interface ShipsInterface {
    Carrier: ShipType;
    BattleShip: ShipType;
    Cruiser: ShipType;
    Submarine: ShipType;
    Destroyer: ShipType;
}

interface PlayerShipsContextProviderInterface {
    children: React.ReactElement;
}

export const defaultShip = {
    name: 'defaultShip',
    width: 0,
    height: 0,
    isSunk: false,
    shipSections: [],
};
export const PlayerShipsContext = createContext<ShipsInterface | null>(null);

export const PlayerShipsContextProvider = function ({ children }: PlayerShipsContextProviderInterface) {
    const [carrier, setCarrier] = useState(defaultShip);
    const [battleShip, setBattleShip] = useState(defaultShip);
    const [cruiser, setCruiser] = useState(defaultShip);
    const [submarine, setSubmarine] = useState(defaultShip);
    const [destroyer, setDestroyer] = useState(defaultShip);

    const assignShip = (
        ship: React.SetStateAction<{
            name: string;
            width: number;
            height: number;
            isSunk: boolean;
            shipSections: never[];
        }>
    ) => {
        switch (ship.name) {
            case 'Carrier':
                setCarrier(ship);
                break;
            case 'BattleShip':
                setBattleShip(ship);
                break;
            case 'Cruiser':
                setCruiser(ship);
                break;
            case 'Submarine':
                setSubmarine(ship);
                break;
            case 'Destroyer':
                setDestroyer(ship);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        fetchData(getShipsURL).then((result) => {
            result.forEach(
                (
                    ship: React.SetStateAction<{
                        name: string;
                        width: number;
                        height: number;
                        isSunk: boolean;
                        shipSections: never[];
                    }>
                ) => assignShip(ship)
            );
        });
    }, []);

    const ships = {
        Carrier: carrier,
        BattleShip: battleShip,
        Cruiser: cruiser,
        Submarine: submarine,
        Destroyer: destroyer,
    };

    return <PlayerShipsContext.Provider value={ships}> {children} </PlayerShipsContext.Provider>;
};
