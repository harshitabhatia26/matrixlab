

function Card(props) {

    return (
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Price in USD {props.item.priceUsd}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Pair Address <p>{props.item.pairAddress}</p></h6>
    <h6 class="card-subtitle mb-2 text-body-secondary">Base Token Name <p>{props.item.baseToken.name}</p></h6>
    <h6 class="card-subtitle mb-2 text-body-secondary">Base Token Address <p>{props.item.baseToken.address}</p></h6>
  </div>
</div>
    )
}

export default Card;