
$data = json_decode(file_get_contents("https://api.pinterest.com/v1/pins/".trim($_GET['pinId'])."/?access_token=AXMo8Bs0USFpb-JrrFhQdDj4JyELFGgHbY5MrhVDTSgtxKBA-wAAAAA&fields=image"),true);
                                                                      
$imgUrl = $data['data']['image']['original']['url'];
header("Location:".$imgUrl); 
