import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {inscricao} from "./inscricao";


@Entity("informacaoadicional",{schema:"public"})
export class informacaoadicional {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>inscricao, inscricao=>inscricao.informacaoadicionals,{  })
    @JoinColumn({ name:'inscricaoid'})
    inscricao:inscricao | null;


    @Column("integer",{ 
        nullable:true,
        name:"ordem"
        })
    ordem:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"titulo"
        })
    titulo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:500,
        name:"descricao"
        })
    descricao:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"resumo"
        })
    resumo:string | null;
        
}
