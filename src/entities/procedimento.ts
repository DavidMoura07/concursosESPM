import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {cargo} from "./cargo";
import {grupoexperiencia} from "./grupoexperiencia";


@Entity("procedimento",{schema:"public"})
export class procedimento {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"nomeaction"
        })
    nomeaction:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"controller"
        })
    controller:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"disponivel"
        })
    disponivel:boolean | null;
        

   
    @OneToMany(type=>cargo, cargo=>cargo.procedimento)
    cargos:cargo[];
    

   
    @OneToMany(type=>grupoexperiencia, grupoexperiencia=>grupoexperiencia.procedimento)
    grupoexperiencias:grupoexperiencia[];
    
}
