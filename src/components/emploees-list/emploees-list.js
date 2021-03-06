import EmploeesListItem from "../emploees-list-item/emploees-list-items"
import './emploees-list';

const EmploeesList = ({data, onDelete}) => {
    
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <EmploeesListItem 
                key={id} 
                {...itemProps}
                onDelete ={() => onDelete(id)}/>
        )
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmploeesList;