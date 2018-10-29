import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {grupoexperiencia} from "./grupoexperiencia";
import {inscricao} from "./inscricao";


@Entity("experienciaprofissional",{schema:"public"})
export class experienciaprofissional {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"experienciaprofissionalid"
        })
    experienciaprofissionalid:number;
        

   
    @ManyToOne(type=>grupoexperiencia, grupoexperiencia=>grupoexperiencia.experienciaprofissionals,{  })
    @JoinColumn({ name:'grupoexperienciaid'})
    grupoexperiencia:grupoexperiencia | null;


    @Column("character varying",{ 
        nullable:true,
        length:2000,
        name:"nome"
        })
    nome:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:8,
        scale:2,
        name:"pontuacao"
        })
    pontuacao:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"importada"
        })
    importada:boolean | null;
        

   
    @ManyToMany(type=>inscricao, inscricao=>inscricao.experienciaprofissionals,{  nullable:false, })
    @JoinTable()
    inscricaos:inscricao[];
    
}
