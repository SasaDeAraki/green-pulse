import './Topic.css'

export default function Topic({icon, titulo, texto}) {
    return(
        <>
        <div class="card">
            <div class="icon">
                <i class="material-icons md-36">{icon}</i>
            </div>
            <p class="title">{titulo}</p>
            <p class="text">{texto}</p>
        </div>
        </>
    )
}