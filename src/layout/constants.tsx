import { Translation } from 'react-i18next'

export const PAGE_KEYS = {
  ABOUT_FETEK: 'about-fetek',
  SERVICES: 'services',
  TECHNOLOGIES: 'technologies',
  PROCESS: 'process',
  PORTFOLIO: 'portfolio',
  DATA_SERVICES: 'data-services',
  SOFTWARE_SERVICES: 'software-services',
  SEND_MESSAGE: 'send-message'
}

export const MAPPING_PATH = {
  [PAGE_KEYS.ABOUT_FETEK]: '/',
  [PAGE_KEYS.SERVICES]: '/',
  [PAGE_KEYS.TECHNOLOGIES]: '/',
  [PAGE_KEYS.PROCESS]: '/',
  [PAGE_KEYS.SEND_MESSAGE]: '/',
  [PAGE_KEYS.DATA_SERVICES]: '/portfolio/data',
  [PAGE_KEYS.SOFTWARE_SERVICES]: '/portfolio/software'
}

export const menuItems = [
  {
    key: PAGE_KEYS.ABOUT_FETEK,
    label: <Translation>{(t) => <p>{t('About FETEK')}</p>}</Translation>
  },
  {
    key: PAGE_KEYS.SERVICES,
    label: <Translation>{(t) => <p>{t('Services')}</p>}</Translation>
  },
  {
    key: PAGE_KEYS.TECHNOLOGIES,
    label: <Translation>{(t) => <p>{t('Technologies')}</p>}</Translation>
  },
  {
    key: PAGE_KEYS.PROCESS,
    label: <Translation>{(t) => <p>{t('Process')}</p>}</Translation>
  },
  {
    key: PAGE_KEYS.PORTFOLIO,
    label: (
      <div className='flex gap-2 items-center'>
        <span>
          <Translation>{(t) => <p>{t('Portfolio')}</p>}</Translation>
        </span>
        {/* <Image alt='arrow-down-icon' src={ArrowDownIcon} preview={false} /> */}
      </div>
    ),
    children: [
      {
        key: PAGE_KEYS.DATA_SERVICES,
        label: <Translation>{(t) => <p>{t('Data Services')}</p>}</Translation>
      },
      {
        key: PAGE_KEYS.SOFTWARE_SERVICES,
        label: <Translation>{(t) => <p>{t('Software Services')}</p>}</Translation>
      }
    ]
  }
]

export const workItems = [
  {
    key: 'how-we-work',
    label: <Translation>{(t) => <p>{t('How We Work')}</p>}</Translation>
  },
  {
    key: 'contact-us',
    label: <Translation>{(t) => <p>{t('Contact Us')}</p>}</Translation>
  }
]

export const serviceItems = [
  {
    key: 'Web and Mobile Development',
    label: <Translation>{(t) => <p>{t('Web and Mobile Development')}</p>}</Translation>
  },
  {
    key: 'Backend Development',
    label: <Translation>{(t) => <p>{t('Backend Development')}</p>}</Translation>
  },
  {
    key: 'AI and Machine Learning',
    label: <Translation>{(t) => <p>{t('AI and Machine Learning')}</p>}</Translation>
  },
  {
    key: 'Data Transformation',
    label: <Translation>{(t) => <p>{t('Data Transformation')}</p>}</Translation>
  },
  {
    key: 'Datalake and Lakehouse',
    label: <Translation>{(t) => <p>{t('Datalake and Lakehouse')}</p>}</Translation>
  },
  {
    key: 'Reporting Development',
    label: <Translation>{(t) => <p>{t('Reporting Development')}</p>}</Translation>
  }
]

export const businessSolutionItems = [
  {
    key: 'Data Solution',
    label: <Translation>{(t) => <p>{t('Data Solution')}</p>}</Translation>
  },
  {
    key: 'IT Solution',
    label: <Translation>{(t) => <p>{t('IT Solution')}</p>}</Translation>
  },
  {
    key: 'Corporate',
    label: <Translation>{(t) => <p>{t('Corporate')}</p>}</Translation>
  }
]
