import * as React from 'react';

import {
  IDocumentCardStyles,
  IStackStyles,
  IStyle,
  mergeStyles,
  mergeStyleSets,
} from '@fluentui/react';

import { AppContext } from '../../common/AppContext';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useConfigurationListStyles = () => {

  const { theme , context } = React.useContext(AppContext);

const panelContainerStyles: IStackStyles ={
  root:{
    paddingTop: 20,
    paddingBottom: 30,
  }
};

const stackItemsContainer: IStackStyles = {
   root: { paddingTop: 15 , maxHeight: `calc(100vh - 450px)`, overflow: 'auto'}
};

  const documentCardStyles: Partial<IDocumentCardStyles> = {
    root: {
      marginTop: 5,
      ':hover':  {
        borderColor: theme.themePrimary,
        borderWidth: 1,
      } as IStyle
    },
  };

  const  configurationListClasses = mergeStyleSets({
      listIcon: mergeStyles({
        fontSize: 18, width: 18, height: 18,color: theme.themePrimary
      }),
      nolistItemIcon: mergeStyles({
        fontSize: 28, width: 28, height: 28,color: theme.themePrimary
      }),
  });

  return {configurationListClasses, documentCardStyles, panelContainerStyles, stackItemsContainer  };
};