import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import useAtualizarEvento from '../../../state/hooks/useAtualizarEvento';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {

    const atualizarEvento = useAtualizarEvento()

    const estilos = [
        'far',
        'fa-2x',
        evento.completo ? 'fa-check-square' : 'fa-square'
    ]

    const completarEvento = () => {

        const eventoAlterado = {...evento} 
        eventoAlterado.completo = !eventoAlterado.completo

        atualizarEvento(eventoAlterado)
    }

    return (
        <i className={estilos.join(' ')} onClick={() => completarEvento()} />
    )
}

export default EventoCheckbox