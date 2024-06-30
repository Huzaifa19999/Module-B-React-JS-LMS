import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { useNavigate } from 'react-router-dom';

export default function LMS_TreeView({ treeStructure }: any) {

    const randomId = () => {
        let id = Math.random().toString().slice(2);
        return id;
    }

    const navigate = useNavigate();

    const navigateScreen = (route: string) => {
        navigate(`/home/${route}`);
    };

    return (
        <Box sx={{ minHeight: 352, minWidth: 250 }}>
            <SimpleTreeView>
                {treeStructure && treeStructure.length > 0 ? treeStructure.map((x: any) => (
                    <TreeItem
                        key={randomId()}
                        itemId={randomId()}
                        label={<Box sx={{ display: 'flex', alignItems: 'center', lineHeight:'4.9rem', fontSize:'1.3rem' }}><div className='me-3'>{x.icon}</div>{x.moduleName}</Box>}
                    >
                        {x.child.map((y: any) => (
                            <TreeItem
                                key={randomId()}
                                onClick={() => {
                                    navigateScreen(y.route);
                                }}
                                itemId={randomId()}
                                label={<Box sx={{ display: 'flex', alignItems: 'center', fontSize:'1.1rem' }}>{y.name}</Box>}
                            />
                        ))}
                    </TreeItem>
                ))
                    : null}
            </SimpleTreeView>
        </Box>
    );

}
