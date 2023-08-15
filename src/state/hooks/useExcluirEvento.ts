import { useSetRecoilState } from 'recoil'
import { listaDeEventosState } from '../atom'
import { IEvento } from '../../interfaces/IEvento'

const useExcluirEvento = () => {

    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

    return (evento: IEvento) => {

        return setListaDeEventos(listaAntiga => listaAntiga.filter((item) => item.id !== evento.id))

    }

}

export default useExcluirEvento
