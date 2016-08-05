
$data = json_decode(file_get_contents("https://api.pinterest.com/v1/pins/".trim($_GET['pinId'])."/?access_token=AQBRHInu-jqty6nbBMvLIJGhky6zFGgK6hQ7iAlDTSgtxKBA-wAAAAA&fields=image"),true);
                                                                      
$imgUrl = $data['data']['image']['original']['url'];
header("Location:".$imgUrl); 
