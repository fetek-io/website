import AlgorithmIcon from '@/assets/icons/algorithm-icon.svg'
import BigDataIcon from '@/assets/icons/big-data-icon.svg'
import CodingIcon from '@/assets/icons/coding-icon.svg'
import DatabaseIcon from '@/assets/icons/database-icon.svg'
import { Image } from 'antd'
import MachineLearningIcon from '@/assets/icons/machine-learning-icon.svg'
import ReportIcon from '@/assets/icons/report-icon.svg'
import { Translation } from 'react-i18next'

export const serviceLists = [
  {
    key: 'Web & Mobile Development',
    label: <Translation>{(t) => t('Web & Mobile \nDevelopment')}</Translation>,
    bgClassName: 'web-dev-bg',
    icon: <Image alt='web-dev-bg' preview={false} src={CodingIcon} height={61} />
  },
  {
    key: 'Backend Development',
    label: <Translation>{(t) => t('Backend \nDevelopment')}</Translation>,
    bgClassName: 'backend-dev-bg',
    icon: <Image alt='backend-dev-bg' preview={false} src={AlgorithmIcon} height={61} />
  },
  {
    key: 'AI & Machine Learning',
    label: <Translation>{(t) => t('AI & Machine \nLearning')}</Translation>,
    bgClassName: 'machine-learning-dev-bg',
    icon: <Image alt='machine-learning-dev-bg' preview={false} src={MachineLearningIcon} height={61} />
  },
  {
    key: 'Data transformation',
    label: <Translation>{(t) => t('Data \nTransformation')}</Translation>,
    bgClassName: 'data-transformation-dev-bg',
    icon: <Image alt='data-transformation-dev-bg' preview={false} src={BigDataIcon} height={61} />
  },
  {
    key: 'datalake . & lakehouse',
    label: <Translation>{(t) => t('Datalake . \n& Lakehouse')}</Translation>,
    bgClassName: 'datalake-dev-bg',
    icon: <Image alt='datalake-dev-bg' preview={false} src={DatabaseIcon} height={61} />
  },
  {
    key: 'reporting Development',
    label: <Translation>{(t) => t('Reporting \nDevelopment')}</Translation>,
    bgClassName: 'reporting-dev-bg',
    icon: <Image alt='reporting-dev-bg' preview={false} src={ReportIcon} height={61} />
  }
]
