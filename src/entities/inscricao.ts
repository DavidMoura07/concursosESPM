import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {requisito} from "./requisito";
import {tipoidentidade} from "./tipoidentidade";
import {orgaoidentidade} from "./orgaoidentidade";
import {uf} from "./uf";
import {escolaridade} from "./escolaridade";
import {estadocivil} from "./estadocivil";
import {tipodeficiencia} from "./tipodeficiencia";
import {classificacao} from "./classificacao";
import {informacaoadicional} from "./informacaoadicional";
import {inscricaotitulo} from "./inscricaotitulo";
import {experienciaprofissional} from "./experienciaprofissional";


@Entity("inscricao",{schema:"public"})
export class inscricao {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"inscricaoid"
        })
    inscricaoid:number;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"datainscricao"
        })
    datainscricao:Date | null;
        

   
    @ManyToOne(type=>requisito, requisito=>requisito.inscricaos,{  })
    @JoinColumn({ name:'requisitoid'})
    requisito:requisito | null;


    @Column("text",{ 
        nullable:true,
        name:"numerocpf"
        })
    numerocpf:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"nome"
        })
    nome:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"datanascimento"
        })
    datanascimento:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"email"
        })
    email:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"numeroidentidade"
        })
    numeroidentidade:string | null;
        

   
    @ManyToOne(type=>tipoidentidade, tipoidentidade=>tipoidentidade.inscricaos,{  })
    @JoinColumn({ name:'tipoidentidadeid'})
    tipoidentidade:tipoidentidade | null;


   
    @ManyToOne(type=>orgaoidentidade, orgaoidentidade=>orgaoidentidade.inscricaos,{  })
    @JoinColumn({ name:'orgaoidentidadeid'})
    orgaoidentidade:orgaoidentidade | null;


    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"dataemissaoidentidade"
        })
    dataemissaoidentidade:Date | null;
        

   
    @ManyToOne(type=>uf, uf=>uf.inscricaos2,{  })
    @JoinColumn({ name:'ufidentidadeid'})
    ufidentidade:uf | null;


    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"logradouro"
        })
    logradouro:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"numero"
        })
    numero:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"complemento"
        })
    complemento:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"bairro"
        })
    bairro:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"cidade"
        })
    cidade:string | null;
        

   
    @ManyToOne(type=>uf, uf=>uf.inscricaos,{  })
    @JoinColumn({ name:'ufenderecoid'})
    ufendereco:uf | null;


    @Column("text",{ 
        nullable:true,
        name:"cep"
        })
    cep:string | null;
        

   
    @ManyToOne(type=>escolaridade, escolaridade=>escolaridade.inscricaos,{  })
    @JoinColumn({ name:'escolaridadeid'})
    escolaridade:escolaridade | null;


   
    @ManyToOne(type=>estadocivil, estadocivil=>estadocivil.inscricaos,{  })
    @JoinColumn({ name:'estadocivilid'})
    estadocivil:estadocivil | null;


    @Column("text",{ 
        nullable:true,
        name:"sexo"
        })
    sexo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"nomepai"
        })
    nomepai:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"nomemae"
        })
    nomemae:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"telefone1"
        })
    telefone1:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"telefone2"
        })
    telefone2:string | null;
        

   
    @ManyToOne(type=>tipodeficiencia, tipodeficiencia=>tipodeficiencia.inscricaos,{  })
    @JoinColumn({ name:'tipodeficienciaid'})
    tipodeficiencia:tipodeficiencia | null;


    @Column("integer",{ 
        nullable:true,
        name:"diastecnico"
        })
    diastecnico:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"diasnaotecnico"
        })
    diasnaotecnico:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"atendimentoespecial"
        })
    atendimentoespecial:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"solicitaisencao"
        })
    solicitaisencao:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"numeronis"
        })
    numeronis:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"numerodua"
        })
    numerodua:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"duapago"
        })
    duapago:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"isencaodeferida"
        })
    isencaodeferida:boolean | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"datacancelamento"
        })
    datacancelamento:Date | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:8,
        scale:2,
        name:"pontuacaoimportada"
        })
    pontuacaoimportada:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:8,
        scale:2,
        name:"pontuacaoassiduidade"
        })
    pontuacaoassiduidade:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"nomeretificado"
        })
    nomeretificado:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"ausente"
        })
    ausente:boolean | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:8,
        scale:2,
        name:"nota"
        })
    nota:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"aprovado"
        })
    aprovado:boolean | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:500,
        name:"causareprovacao"
        })
    causareprovacao:string | null;
        

   
    @OneToMany(type=>classificacao, classificacao=>classificacao.inscricao)
    classificacaos:classificacao[];
    

   
    @OneToMany(type=>informacaoadicional, informacaoadicional=>informacaoadicional.inscricao)
    informacaoadicionals:informacaoadicional[];
    

   
    @OneToMany(type=>inscricaotitulo, inscricaotitulo=>inscricaotitulo.inscricao)
    inscricaotitulos:inscricaotitulo[];
    

   
    @ManyToMany(type=>experienciaprofissional, experienciaprofissional=>experienciaprofissional.inscricaos)
    experienciaprofissionals:experienciaprofissional[];
    
}
