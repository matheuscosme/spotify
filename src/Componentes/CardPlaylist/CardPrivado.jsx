import React from "react";
import { Link } from "react-router-dom";

function Card({estilo,nome,id}){

return(
    <div className="tabela">
                <table>
                    <thead>
                        <tr>
                            <td>{estilo}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link to = {"/PlaylistDoUser/" + id}> <img src={"../img/user/" + 1 + ".jpg"}/></Link>
                                <h3>{nome}</h3>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
);
    
}
export default Card;