import './Topic.css'

export default function Topic({icon, titulo, texto}) {
    return(
        <>
        <div class="card-topic">
            <div class="icon-topic">
                <i class="material-icons md-36">{icon}</i>
            </div>
            <p class="title-topic">{titulo}</p>
            <p class="text-topic">{texto}</p>
        </div>
        </>
    )
}