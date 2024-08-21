import { Grid } from 'antd'

const { useBreakpoint } = Grid

export const useScreen = () => {
  const screens = useBreakpoint()
  const isMobile = screens.xs

  return {
    isMobile
  }
}
