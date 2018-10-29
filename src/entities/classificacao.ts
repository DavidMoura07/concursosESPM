import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {inscricao} from "./inscricao";


@Entity("classificacao",{schema:"public"})
export class classificacao {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"classificacaoid"
        })
    classificacaoid:number;
        

   
    @ManyToOne(type=>inscricao, inscricao=>inscricao.classificacaos,{  })
    @JoinColumn({ name:'inscricaoid'})
    inscricao:inscricao | null;


    @Column("integer",{ 
        nullable:true,
        name:"posicao"
        })
    posicao:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"posicaodeficiente"
        })
    posicaodeficiente:number | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:8,
        scale:2,
        name:"pontuacaoexperiencia"
        })
    pontuacaoexperiencia:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:8,
        scale:2,
        name:"pontuacaotitulo"
        })
    pontuacaotitulo:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:8,
        scale:2,
        name:"pontuacaoimportada"
        })
    pontuacaoimportada:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"contratado"
        })
    contratado:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"reclassificado"
        })
    reclassificado:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"eliminado"
        })
    eliminado:boolean | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"datacontratacao"
        })
    datacontratacao:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"datareclassificacao"
        })
    datareclassificacao:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"dataeliminacao"
        })
    dataeliminacao:Date | null;
        
}
