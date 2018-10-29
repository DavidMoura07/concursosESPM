import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {concurso} from "./concurso";


@Entity("gestorconcurso",{schema:"public"})
export class gestorconcurso {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"gestorconcursoid"
        })
    gestorconcursoid:number;
        

   
    @ManyToOne(type=>concurso, concurso=>concurso.gestorconcursos,{  })
    @JoinColumn({ name:'concursoid'})
    concurso:concurso | null;


    @Column("integer",{ 
        nullable:true,
        name:"gestorid"
        })
    gestorid:number | null;
        
}
