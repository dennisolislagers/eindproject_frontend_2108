import React from 'react';
import {Link} from "react-router-dom";

function Homepage () {
    return (
        <div className="home-page-container">
            <h1>WAT ETEN WE VANDAAG</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, alias aliquam animi consectetur consequatur debitis deleniti ea error expedita impedit iste magni maxime necessitatibus nesciunt, nisi officia pariatur, reiciendis suscipit temporibus totam. Ab dolorum fugiat ipsa natus optio quos sit, temporibus voluptatibus. Assumenda blanditiis consequatur dolor excepturi ipsam iste magni minus molestias nisi, nostrum nulla quibusdam quod quos rem, saepe sapiente veniam? At atque autem ex facilis nihil nostrum officia velit? Ad architecto atque autem blanditiis cum dolor ducimus earum enim, eum ex laborum magni maxime minus natus nobis nostrum obcaecati officiis pariatur perferendis qui quo ratione saepe tempora unde veniam voluptate voluptatem voluptatum. Ad consectetur consequuntur cupiditate, deleniti dolore ducimus error et exercitationem facere hic iure laudantium mollitia obcaecati perspiciatis praesentium quibusdam rem sequi soluta, sunt voluptatibus. Accusamus commodi culpa delectus molestiae nisi numquam, quisquam! Ab aliquid architecto aspernatur at beatae, dolore itaque, nemo nisi officiis, provident quibusdam reiciendis. A accusantium, aspernatur autem ea eligendi facilis hic illum ipsa iusto laboriosam laudantium minima molestiae mollitia neque numquam porro quaerat quibusdam ratione reiciendis sint tempora voluptas voluptatum! Dicta illum nemo nisi officiis veniam! Aut ea eligendi impedit in ipsa laborum natus perferendis repellat sunt tempora? Commodi, corporis cupiditate deleniti nemo repellendus sunt unde vel. Amet cumque nihil officiis porro quod voluptates? Animi consequatur corporis debitis exercitationem, harum ipsam iure, molestias mollitia nam officia, quia rerum vel voluptas. Ad adipisci deserunt dolorum enim fugit illum itaque iure laudantium maxime, neque, perferendis reiciendis saepe sequi sit voluptatibus? Consequuntur eos impedit recusandae repellendus?
            </p>

            <p> Log <Link to="/inloggen"> Hier </Link> in om gebruik te maken van de applicatie. </p>
            <p> Nog niet ingeschreven? Schrijf je <Link to ="/inschrijven"> Hier </Link> in!!</p>
        </div>
    );
}

export default Homepage;