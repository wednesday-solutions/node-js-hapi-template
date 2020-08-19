import { GRANT_TYPE, SCOPE_TYPE } from './constants';

export const mockMetadata = (scope = SCOPE_TYPE.USER, resourceType) => ({
    oauth_client_scope: {
        get: () => ({
            id: 1,
            oauth_client_id: 1,
            scope
        })
    },
    oauth_client_resources: [
        {
            get: () => ({
                id: 1,
                oauth_client_id: 1,
                resource_type: resourceType,
                resource_id: 1
            })
        }
    ]
});

export const mockData = {
    MOCK_USER: {
        id: 1,
        firstName: 'Sharan',
        lastName: 'Salian',
        email: 'sharan@wednesday.is'
    },
    MOCK_OAUTH_CLIENTS: {
        id: 1,
        clientId: 'TEST_CLIENT_ID_1',
        clientSecret: 'TEST_CLIENT_SECRET',
        grantType: GRANT_TYPE.CLIENT_CREDENTIALS,
        ...mockMetadata()
    },
    MOCK_OAUTH_CLIENT_RESOURCES: {
        id: 1,
        oauthClientId: 'TEST_CLIENT_ID_1',
        resourceType: 'OAUTH_CLIENT_ID',
        resourceId: 1
    }
};
