import { IEvento } from "../../interfaces/IEvento"
import { useSetRecoilState } from 'recoil'
import { listaDeEventosState } from '../atom'
import { obterId } from "../../util"

const useAdicionarEvento = () => {

    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

    return (evento: IEvento) => {

        if (evento.inicio < new Date) {
            throw new Error('Apenas eventos com data a partir de hoje são permitidos')
        }
        
        evento.id = obterId()

        return setListaDeEventos (listaAntiga => [...listaAntiga, evento])

    }

}

export default useAdicionarEvento