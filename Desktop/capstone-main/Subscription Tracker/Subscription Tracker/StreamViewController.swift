//
//  StreamViewController.swift
//  Subscription Tracker
//
//  Created by Brian Calabrese on 4/14/21.
//

import UIKit

class StreamViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    class AppCell: UITableViewCell{
        @IBOutlet weak var AppNameLabel: UILabel!
        
    }
    @IBAction func ProfileButton(_ sender: Any) {
    }
    
    @IBOutlet weak var AppTableView: UITableView!
    
    
    @IBAction func DetailsButton(_ sender: Any) {
    }
    @IBAction func AddButton(_ sender: Any) {
    }
    
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
