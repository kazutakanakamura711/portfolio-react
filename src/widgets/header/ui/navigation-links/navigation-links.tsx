import { ListItem, Link, UnorderedList } from '@chakra-ui/react';
import { publicRoutes } from '@/routes/publicRoutes';

type NavigationLinksProps = {
  onNavigate: (path: string) => void;
};

export const NavigationLinks = ({ onNavigate }: NavigationLinksProps) => (
  <UnorderedList
    display="flex"
    justifyContent="space-between"
    flex="1"
    maxW="60%"
    m={0}
    p={0}
    listStyleType="none"
  >
    {publicRoutes.map((link, index) => (
      <ListItem key={index} listStyleType="none">
        <Link
          onClick={() => onNavigate(link.path)}
          textDecoration="none"
          color="black"
          textShadow="1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white"
          _hover={{ textDecoration: 'none' }}
        >
          {link.label}
        </Link>
      </ListItem>
    ))}
  </UnorderedList>
);
