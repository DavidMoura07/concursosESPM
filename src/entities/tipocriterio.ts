import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {criteriodesempate} from "./criteriodesempate";


@Entity("tipocriterio",{schema:"public"})
export class tipocriterio {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"tipocriterioid"
        })
    tipocriterioid:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"descricao"
        })
    descricao:string | null;
        

   
    @OneToMany(type=>criteriodesempate, criteriodesempate=>criteriodesempate.tipocriterio)
    criteriodesempates:criteriodesempate[];
    
}
