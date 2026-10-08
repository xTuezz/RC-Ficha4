function Card({ name, type, health, stamina }) {
  return (
    <li>
        <div>
            <p><b>{name}</b> | {type} | {health}HP | {stamina}SP
            
             {health > 100 && ( 
                <>
                    <span style={{ marginLeft: "10px", marginRight: "10px" }}>•</span>
                    <span>Tanky</span>
                </>
            )}

             </p>
        </div>
    </li>
  );
}

export default Card;