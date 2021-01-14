/*
*****************************************************
*    ____          _    _ _____            __  __   *
*   |  _ \   /\   | |  | |  __ \     /\   |  \/  |  *
*   | |_) | /  \  | |__| | |__) |   /  \  | \  / |  *
*   |  _ < / /\ \ |  __  |  _  /   / /\ \ | |\/| |  *
*   | |_) / ____ \| |  | | | \ \  / ____ \| |  | |  *
*   |____/_/    \_\_|  |_|_|  \_\/_/    \_\_|  |_|  *
*                                                   *
*****************************************************
*/
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "dynamodb:PutItem",
                "dynamodb:DeleteItem",
                "dynamodb:GetItem",
                "dynamodb:Scan",
                "dynamodb:updateItem"
            ],
            "Resource": "arn:aws:dynamodb:us-east-1:044973589807:table/eworkProfiles"
        }
    ]
}