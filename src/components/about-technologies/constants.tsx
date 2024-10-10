import DartIcon from '@/assets/icons/language/dart.svg'
import DiangoIcon from '@/assets/icons/data/Django.png'
import ElasticsearchIcon from '@/assets/icons/database/elasticsearch.png'
import FlutterIcon from '@/assets/icons/data/Flutter.png'
import HadoopIcon from '@/assets/icons/data/Hadoop.png'
import { Image } from 'antd'
import JavaIcon from '@/assets/icons/language/java.svg'
import JavascriptIcon from '@/assets/icons/language/javascript.svg'
import KotlinIcon from '@/assets/icons/language/kotlin.svg'
import MySQLIcon from '@/assets/icons/database/MySQL.png'
import NextJSIcon from '@/assets/icons/data/NextJS.png'
import NodeJSIcon from '@/assets/icons/data/NodeJS.png'
import NuxtJSIcon from '@/assets/icons/data/NuxtJS.png'
import PostgreSQLIcon from '@/assets/icons/database/postgreSQL.png'
import PowerBIIcon from '@/assets/icons/data/Power-BI.png'
import PythonIcon from '@/assets/icons/language/python.svg'
import QlikIcon from '@/assets/icons/data/Qlik.png'
import ReactJSIcon from '@/assets/icons/data/ReactJS.png'
import SpringBootIcon from '@/assets/icons/data/Spring-Boot.png'
import SwiftIcon from '@/assets/icons/language/swift.svg'
import TableauIcon from '@/assets/icons/data/Tableau.png'
import TypescriptIcon from '@/assets/icons/language/typescript.svg'
import VueJSIcon from '@/assets/icons/data/vuejs.png'
import SnowFlakeIcon from '@/assets/icons/data/snowflake.png'
import SuperSetIcon from '@/assets/icons/data/superset.png'
import DataBrickIcon from '@/assets/icons/data/databrick.png'
export enum TECHNOLOGIES {
  LANGUAGE = 'technology.language',
  DATA = 'technology.data'
}
export const technologyTabs = [TECHNOLOGIES.LANGUAGE, TECHNOLOGIES.DATA]

export const languageList = [
  {
    key: 'Java',
    label: 'Java',
    icon: <Image alt='Java' src={JavaIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Kotlin',
    label: 'Kotlin',
    icon: <Image alt='Kotlin' src={KotlinIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Spring Boot',
    label: 'Spring Boot',
    icon: <Image alt='Spring Boot' src={SpringBootIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'TypeScript',
    label: 'TypeScript',
    icon: <Image alt='TypeScript' src={TypescriptIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Javascript',
    label: 'Javascript',
    icon: <Image alt='Javascript' src={JavascriptIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'NodeJS',
    label: 'NodeJS',
    icon: <Image alt='NodeJS' src={NodeJSIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'ReactJS',
    label: 'ReactJS',
    icon: <Image alt='ReactJS' src={ReactJSIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Vue.JS',
    label: 'Vue.JS',
    icon: <Image alt='Vue.JS' src={VueJSIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Next.js',
    label: 'Next.js',
    icon: <Image alt='Next.js' src={NextJSIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Nuxt.js',
    label: 'Nuxt.js',
    icon: <Image alt='Nuxt.js' src={NuxtJSIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Dart',
    label: 'Dart',
    icon: <Image alt='Dart' src={DartIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Flutter',
    label: 'Flutter',
    icon: <Image alt='Flutter' src={FlutterIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Swift',
    label: 'Swift',
    icon: <Image alt='Swift' src={SwiftIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Python',
    label: 'Python',
    icon: <Image alt='Python' src={PythonIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Django',
    label: 'Django',
    icon: <Image alt='Django' src={DiangoIcon} preview={false} height={56} width={56} />
  }
]

export const databaseList = []

export const dataList = [
  {
    key: 'PostgreSQL',
    label: 'PostgreSQL',
    icon: <Image alt='PostgreSQL' src={PostgreSQLIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'MySQL',
    label: 'MySQL',
    icon: <Image alt='MySQL' src={MySQLIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Elasticsearch',
    label: 'Elasticsearch',
    icon: <Image alt='Elasticsearch' src={ElasticsearchIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Hadoop',
    label: 'Hadoop',
    icon: <Image alt='Hadoop' src={HadoopIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Tableau',
    label: 'Tableau',
    icon: <Image alt='Tableau' src={TableauIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Qlik',
    label: 'Qlik',
    icon: <Image alt='Qlik' src={QlikIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Power BI',
    label: 'Power BI',
    icon: <Image alt='Power BI' src={PowerBIIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'SnowFlake',
    label: 'SnowFlake',
    icon: <Image alt='SnowFlake' src={SnowFlakeIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Superset',
    label: 'Superset',
    icon: <Image alt='Superset' src={SuperSetIcon} preview={false} height={56} width={56} />
  },
  {
    key: 'Databricks',
    label: 'Databricks',
    icon: <Image alt='Databricks' src={DataBrickIcon} preview={false} height={56} width={56} />
  }
]

export const technologyList = {
  [TECHNOLOGIES.LANGUAGE]: languageList,
  [TECHNOLOGIES.DATA]: dataList
}
