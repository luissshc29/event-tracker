import { selector } from 'recoil'
import { filtroDeEventos, listaDeEventosState } from '../atom'
import { IEvento } from '../../interfaces/IEvento'

export const eventosFiltradosState = selector({
    key: 'eventosFiltrdosState',
    get: ({ get }) => {
        const filtro = get(filtroDeEventos)
        const todosOsEventos = get(listaDeEventosState)

        const eventos = todosOsEventos.filter(evento => {
            if (!filtro.data) {
                return true
            } else {
                const ehOMesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
        
                return ehOMesmoDia
            }
        })

        return eventos
    }
})

export const eventosAsync = selector({
    key: 'eventosAsync',
    get: async() => {
        const http = await fetch('http://localhost:8080/eventos')
        const httpJson: IEvento[] = await http.json()
        return httpJson.map(evento => ({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim)
        }))
    }
})
