import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {concurso} from "./concurso";
import {cargo} from "./cargo";
import {gestorarea} from "./gestorarea";


@Entity("area",{schema:"public"})
export class area {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"areaid"
        })
    areaid:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:250,
        name:"nome"
        })
    nome:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:500,
        name:"descricao"
        })
    descricao:string | null;
        

   
    @ManyToOne(type=>area, area=>area.areas,{  })
    @JoinColumn({ name:'areaidsuperior'})
    areaidsuperior:area | null;


   
    @ManyToOne(type=>concurso, concurso=>concurso.areas,{  })
    @JoinColumn({ name:'concursoid'})
    concurso:concurso | null;


    @Column("boolean",{ 
        nullable:true,
        name:"ocultarcandidato"
        })
    ocultarcandidato:boolean | null;
        

   
    @OneToMany(type=>area, area=>area.areaidsuperior)
    areas:area[];
    

   
    @OneToMany(type=>cargo, cargo=>cargo.area)
    cargos:cargo[];
    

   
    @OneToMany(type=>gestorarea, gestorarea=>gestorarea.area)
    gestorareas:gestorarea[];
    
}
